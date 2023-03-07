function submitTeamSheet(){ //get both team sheets when submitted to use for scoring
    let teamSheet = {'teamAnames':NaN, 'teamBnames':NaN, 'teamAnumbers':NaN, 'teamBnumbers':NaN}
    teamAnamedata = document.getElementsByClassName("playername teamA");
    teamBnamedata = document.getElementsByClassName("playername teamB");
    teamAnumberdata = document.getElementsByClassName("playernumber teamA");
    teamBnumberdata = document.getElementsByClassName("playernumber teamB");
    
    //put both team names into team sheet
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