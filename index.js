const record = [
    { year: "2018", result: "L" },
    { year: "2017", result: "W" },
    { year: "2016", result: "N/A" }
    //...
]


function superbowlWin(Objects) {
    let result = Objects.find((e) => {
        return e["result"] === "W";
    });

    return !!result ? result["year"] : undefined
}