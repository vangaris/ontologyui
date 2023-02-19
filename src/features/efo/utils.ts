import { ChartData } from "../../types/types";

export const setTermDataToWordsCount = (efoTerms:Array<any>) => efoTerms.map((term) => {
    const wordCount = term.label.split(" ").length;
    return { x: wordCount, y: 1 };
});

export const groupedChartDataData = (data: ChartData[]) => data.reduce((acc, curr) => {
    const found = acc.find((el) => el.x === curr.x);
    
    if (found) {
        found.y += curr.y;
    } else {
        acc.push(curr);
    }
    
    return acc;
}, [] as ChartData[]);