export function orginizeKeywords(articles) {
  const countedByPopularity = countByPopularity(articles);
  const sortedByPopularity = sortByPopularity(countedByPopularity);
  const formatedData = formatData(sortedByPopularity);

  return formatedData;

  function countByPopularity(data) {
    const keywords = {};

    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (keywords[data[i].keyword]) {
          keywords[data[i].keyword]++;
        } else {
          keywords[data[i].keyword] = 1;
        }
      }
    }

    return keywords;
  }

  function sortByPopularity(countedByPopularityData) {
    const countedByPopularityDataArray = [];

    for (const [keyword, counter] of Object.entries(countedByPopularityData)) {
      countedByPopularityDataArray.push({ keyword, counter });
    }

    return countedByPopularityDataArray.sort((a, b) => b.counter - a.counter);
  }

  function formatData(sortedByPopularity) {
    const [first, second, ...rest] = sortedByPopularity;

    if (rest.length > 0) {
      const suffix = rest.length === 1 ? " other" : " others";

      return (
        first.keyword + ", " + second.keyword + " and " + rest.length + suffix
      );
    }

    if (second) {
      return first.keyword + ", " + second.keyword;
    }

    if (first) {
      return first.keyword;
    } else {
      return "";
    }
  }
}
