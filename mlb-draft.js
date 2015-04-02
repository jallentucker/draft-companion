var fs = require('fs');
var readLine = require('readline');

var rl = readLine.createInterface({
	input: process.stdin,
	output: process.stdout
});

var valueBaseline = (10.82 - 1.02) / 199;
var adpBaseline = (1.2 - 199.9) / 199;

fs.readFile('projection.txt', { encoding: 'utf8' }, function(err, projectionData) {
	var playerStrings = projectionData.split('\r\n');
	var players = playerStrings.map(function(playerString) {
		var playerArray = playerString.split('\t');
		var playerObject = {
			name: playerArray[0].split('(')[0].trim(),
			projection: parseFloat(playerArray[playerArray.length - 1]),
			adp: 200
		};
		return playerObject;
	});
	fs.readFile('adp.txt', { encoding: 'utf8' }, function(err, adpData) {
		var adpPlayerStrings = adpData.split('\r\n');
		adpPlayerStrings.forEach(function(adpPlayerString) {
			var adpPlayerArray = adpPlayerString.split('\t');
			var adpPlayerName = adpPlayerArray[1].split(',')[0].trim();
			for (var x = 0; x < players.length; x++) {
				if (players[x].name === adpPlayerName) {
					players[x].adp = parseFloat(adpPlayerArray[3]);
					break;
				}
			}
		});
		// var counter = 0;
		// for (var x = 0; counter < 20; x++) {
		// 	if (players[x].adp === 200) {
		// 		console.log(players[x]);
		// 		counter++;
		// 	}
		// }
		var choices = [];
		var pickPlayer = function() {
			var pickIndex = 0;
			var pick = players[pickIndex];
			for (var x = 1; x < players.length; x++) {
				var diff1 = (pick.projection - players[x].projection) / valueBaseline;
				var diff2 = (pick.adp - players[x].adp) / adpBaseline;
				if (diff1 + diff2 < 0) {
					pickIndex = x;
					pick = players[pickIndex];
				}
			}
			var removePickFromPlayers = function() {
				players.forEach(function(player, index) {
					if (index > pickIndex) {
						players[index - 1] = player;
					}
				});
				players.pop();
			};
			removePickFromPlayers();
			choices.push(pick);
			console.log(pick);
		};
		var choose = function() {
			for (var x = 0; x < 15; x++) {
				pickPlayer();
			}
			// console.log(choices);
			choices.forEach(function(choice) {
				players.push(choice);
			});
			choices = [];
			players.sort(function(a, b) {
				if (b.projection >= a.projection) {
					return 1;
				} else {
					return -1;
				}
			});
			// for (var x = 0; x < 20; x++) {
			// 	console.log(players[x]);
			// }
			// console.log(players);
			rl.question('Who was picked? ', function(answer) {
				answer = answer.trim();
				for (var x = 0; x < players.length; x++) {
					if (players[x].name === answer) {
						players.forEach(function(player, index) {
							if (index > x) {
								players[index - 1] = player;
							}
						});
						players.pop();
						console.log('Player removed!');
						break;
					}
				}
				choose();
			});
		};
		choose();
	});
});

// var players = [
// 	{
// 		name: 'Michael Cuddyer',
// 		projection: 4.43,
// 		adp: 200
// 	}, {
// 		name: 'Adam LaRoche',
// 		projection: 4.22,
// 		adp: 167.1
// 	}, {
// 		name: 'Josh Harrison',
// 		projection: 4.03,
// 		adp: 135.3
// 	}, {
// 		name: 'Melky Cabrera',
// 		projection: 3.93,
// 		adp: 145.6
// 	}, {
// 		name: 'Jake McGee',
// 		projection: 3.73,
// 		adp: 176.7
// 	}
// ];


// pickPlayer();
// pickPlayer();
// pickPlayer();
