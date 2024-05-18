export const Netflix_logo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const User_Logo =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const Body_Image =
  "https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const api_url =
  "https://streaming-availability.p.rapidapi.com/shows/search/filters?country=us&show_type=movie&series_granularity=show&order_by=original_title&output_language=en&order_direction=asc&genres_relation=and";
export const api_options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "976055a894msh5445c8e4538be90p164a17jsn0413a0714d3c",
    "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
  },
};

export const supported_Languages = [
  { identifier: "english", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "malayalam", name: "Malayalam" },
  { identifier: "spanish", name: "Spanish" },
];
