class Scores{
  constructor(rounds, ...limits){
    if(rounds === limits.length){
      this.rounds = rounds
      this.limits = limits
    } else {
      console.log("There was an error creating scores")
      return
    }
    this.scores = this.getScores(this.limits, this.getRounds, this.randomizeNumbers)
  }

  randomizeNumbers(mult){
    return Math.floor(Math.random()*mult)
  }

  getRounds(limit, randomizeNumbers){
    const temp = []
    for(let i=0; i<22; i++){
      temp.push(randomizeNumbers(limit))
    }
    return temp
  }

  getScores(limits, getRounds, randomizeNumbers){
    const temp = {}
    limits.forEach(function(limit, index){
      temp[`round${index+1}`] = getRounds(limit, randomizeNumbers)
    })
    return temp
  }
}