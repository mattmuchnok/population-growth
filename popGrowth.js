const popGrow = (p0, pct, aug, p) => {
    let totPop = p0
    let percent = pct / 100
    let endGame = p

    for (let i = 1; totPop <= endGame; i++) {
        totPop = totPop + (totPop * percent) + aug
        let yearCount = i
        console.log(totPop)
        console.log(i)
    }
}

popGrow(1500,5,100,5000)