// code your solution here
function superbowlWin(records) {
    const recordsForBowl = records.find(record => record.result === 'W')
    if (recordsForBowl === undefined) {
        return undefined
    
    } else return recordsForBowl.year
    
}
