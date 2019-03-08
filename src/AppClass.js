// const url = "http://localhost/asomkotha";
const url = "https://invisionweb.in/invision_site_php";

// for invision website
export const writeToUsPHP = `${url}/writeToUs.php`;
export const checkInboxPHP = `${url}/checkInbox.php`;

// rest was for asom kotha website
export const kabyaPHP = `http://localhost/cottonapp/kabya.php`;
export const topGridPHP = `${url}/homePageTopGrid.php`;
export const topicPageTopGridPHP = `${url}/topicPageTopGrid.php`;
export const homePHP = `${url}/home.php`;
export const particularNewsPHP = `${url}/particularNews.php`;
export const youMightAlsoLikePHP = `${url}/youMightAlsoLike.php`;
export const videoPHP = `${url}/video.php`;
export const insertCommentPHP = `${url}/insert_comment.php`;
export const getCommentsPHP = `${url}/get_comments.php`;
export const allNewsOneCategoryPHP = `${url}/all_news_one_category.php`;
export const loginPHP = `${url}/login.php`;



export const CATEGORY_NAMES = ["assampolitics", "national"];

export function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

export const tabArray = [
    { name: "HOME", value: "home" },
    { name: "ASSAM POLITICS", value: "assampolitics" },
    { name: "NATIONAL", value: "national" },
    { name: "INTERNATIONAL", value: "international" },
    { name: "NEIGHBOURS", value: "neighbours" },
    { name: "ECONOMY", value: "economy" },
    { name: "AGRICULTURE", value: "agriculture" },
    { name: "INDUSTRY", value: "industry" },
    { name: "TRAVEL & TOURISM", value: "travel&tourism" },
    { name: "HEALTH", value: "health" },
    { name: "SPORTS", value: "sports" },
    { name: "CULTURE", value: "culture" },
    { name: "CINEMA", value: "cinema" },
    { name: "THEATRE", value: "theatre" },
    { name: "MUSIC", value: "music" },
    { name: "DANCE", value: "dance" },
    { name: "FOLK", value: "folk" },
    { name: "ARTS", value: "arts" },
    { name: "ENVIRONMENT", value: "environment" },
    { name: "COMMERCE", value: "commerce" }
];

export const drawerData = [
    {name: "Home", link: "/"},
    {name: "Products", link: "/products"},
    // {name: "News & Blog", link: "/news&blog"},
    {name: "About", link: "/about"},
    {name: "Contact Us", link: "/#contact"}
]
