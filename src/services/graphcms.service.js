export const FetchQueryResponse = async (query) => {
  const url =
    "https://api-ap-northeast-1.graphcms.com/v2/cku43yi9x05pc01ze86bif8ov/master";
  const body = {
    query: query,
    variables: null,
    operationName: "MyQuery",
  };
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MzMwMDMxMjcsImF1ZCI6WyJodHRwczovL2FwaS1hcC1ub3J0aGVhc3QtMS5ncmFwaGNtcy5jb20vdjIvY2t1NDN5aTl4MDVwYzAxemU4NmJpZjhvdi9tYXN0ZXIiLCJodHRwczovL21hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LmdyYXBoY21zLmNvbS8iLCJzdWIiOiIxMGQ3YzU4ZC1mMjNlLTQyNGItYWE0Ny03MTQ3N2UzZTA5NWIiLCJqdGkiOiJja3U2dndkYWwya3NpMDF6ZTlxNmVnbjVwIn0.JA0-pKD00Ycg92V1aA7Lw3PtFVqYgX5MhnwPRAecaP8nWBVZz4Z6sh8UGStCdf1duypKM1w33Phetk354MWgaUIxlHACDJ7IRFKnB8VNDt_cWxxa1fPRXeE1Iqujsm82DPTvzGKmVD2eJy0tJmhE7zARrZen07o2QMiHGg1qn3laDxcQLZsP6UPVIvo6a-V_HYZyC6fDSrFDJtWagMsSW63mQuN2pED12Eb4NUQ0mVOit85LvUaNjqC-Mg3lu8_cF0m0NBNKid_2LgOyGdgyDRCFD050d1QdcV51gJ8JUjhBv30SdclDNxdtvOyJW27C_frJqB8Zd2jgno7tmZKqJXuLvx6VDrKV5LF8zTREqOYGAQcXL17Zu6jjXvBry-NImmNgjmiYHGxxcIplI_OsGiO26pY3JjDhjsc4tKJ65xKTNXoWHzwSolaZfw9AVLn-A7t3QgsQYy1TPd71zGaopmixl1JJH1dkJ2_bCVKX7-bxsvcWULum23ldM8SKEgScnAuSa14xXYf-Sw-8fHCI6wn29ASoMVbjvGzCgQtRnAfiblbFgxz1NoW981uE9VxNWnlGn9I4tHnPcbpXa7pMdCO7s_hEmhVAk-4qTY4EkBYdBFZWXqCkqr5xM3hJvmvWdsyOoEP7zMSij8VoJLj2xtJOvMoMARG7iU1oI9amCu8",
    },
  });

  return await response.json();
};
