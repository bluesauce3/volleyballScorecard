function submitTeamSheet(){ //get both team sheets when submitted to use for scoring
    let teamSheet = {'teamAteamName':NaN, 'teamBteamName':NaN, 'teamAnames':NaN, 'teamBnames':NaN, 'teamAnumbers':NaN, 'teamBnumbers':NaN}
    teamAnamedata = document.getElementsByClassName("playername teamA");
    teamBnamedata = document.getElementsByClassName("playername teamB");
    teamAnumberdata = document.getElementsByClassName("playernumber teamA");
    teamBnumberdata = document.getElementsByClassName("playernumber teamB");

    //put both teams team name into data sheet
    teamSheet['teamAteamName'] = (document.getElementsByClassName("teamname teamA"))[0].textContent;
    teamSheet['teamBteamName'] = (document.getElementsByClassName("teamname teamB"))[0].textContent;

    //put both teams names into team sheet
    teamAPlayerNames = [];
    for (let i = 0; i < teamAnamedata.length; i++) {
        teamAPlayerNames.push(teamAnamedata[i].textContent);
    }
    teamSheet['teamAnames'] = teamAPlayerNames.slice();

    teamBPlayerNames = [];
    for (let i = 0; i < teamBnamedata.length; i++) {
        teamBPlayerNames.push(teamBnamedata[i].textContent);
    }
    teamSheet['teamBnames'] = teamBPlayerNames.slice();

    //put both teams numbers into team sheet
    teamAPlayerNumbers = [];
    for (let i = 0; i < teamAnumberdata.length; i++) {
        teamAPlayerNumbers.push(teamAnumberdata[i].textContent);
    }
    teamSheet['teamAnumbers'] = teamAPlayerNumbers.slice();

    teamBPlayerNumbers = [];
    for (let i = 0; i < teamBnumberdata.length; i++) {
        teamBPlayerNumbers.push(teamBnumberdata[i].textContent);
    }
    teamSheet['teamBnumbers'] = teamBPlayerNumbers.slice();

    console.log(teamSheet);
}

function submitRotationSheet(){
    let rotationSheet = []
}