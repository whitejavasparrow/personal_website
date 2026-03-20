function makeTimeline(dataObj, htmlTag, idName) {
  const dataObjArray = dataObj.map(
    (el) => `
  <li>
    <div>
      <div class="title">${el.name}</div>
      <div class="info">${el.dept.map((el) => el).join("<br><br>")}</div>
      <div class="type">${el.degree}</div>
    </div>
    <span class="number">
      <span>${el.start_at}</span>
      <span>${el.end_at}</span>
    </span>
  </li>`
  );

  const timelineTemplate = dataObjArray.join("");

  document.getElementsByClassName(htmlTag)[0].innerHTML =
    `<ul id="${idName}">` + timelineTemplate + "</ul>";
}

// education
const education = [
  {
    name: "國立臺灣大學<br>National Taiwan University",
    dept: ["語言學研究所<br>Graduate Institute of Linguistics"],
    degree: "碩士 M.A.",
    start_at: "2017.09",
    end_at: "2021.05",
  },
  {
    name: "比利時根特大學<br>Ghent University, Ghent, Belgium",
    dept: [
      "校級交換學生<br>University-Level Outgoing Exchange Student Program",
    ],
    degree: [
      "獲政大鼓勵學生赴國外進行短期進修獎學金<br>Received subsidies from NCCU Short-Term Study Abroad Program",
    ],
    start_at: "2017.02",
    end_at: "2017.06",
  },
  {
    name: "國立政治大學<br>National Chengchi University",
    dept: ["英國語文學系<br>English Language and Literature"],
    degree: "學士 B.A.",
    start_at: "2012.09",
    end_at: "",
  },
];

makeTimeline(education, "education-container timeline-container", "education");
//

// experience
const experience = [
  {
    name: "連加網路商業股份有限公司<br>LINE Pay Taiwan Limited",
    dept: [
      "經營管理總處董事會秘書部門 Board of Directors (BoD) Affairs, Business Management (BM)",
    ],
    degree: "董事會秘書 - 中-英筆譯譯者<br>BoD Secretary - Chinese-English Translator",
    start_at: "2024.02",
    end_at: "2025.09",
  },
  {
    name: "美商廣捷視訊網路股份有限公司<br>InfoValue Computing Inc.",
    dept: [
      "Dev Team",
    ],
    degree: "前端工程師<br>Front-end Developer",
    start_at: "2023.03",
    end_at: "2023.10",
  },
  {
    name: "國立臺灣師範大學科學教育研究所<br>Graduate Institute of Science Education, National Taiwan Normal University",
    dept: [
      "國家科學及技術委員會(前科技部)創辦國際期刊：《科學與數學教育研究》<br>International journal founded by National Science and Technology Council (NSTC; formerly MOST): <i>International Journal of Science and Mathematics Education (IJSME)</i>",
    ],
    degree: "專任期刊計畫助理<br>Full-time editorial assistant",
    start_at: "2022.02",
    end_at: "2022.06",
  },
  {
    name: "國立臺灣大學語言學研究所<br>Graduate Institute of Linguistics, National Taiwan University",
    dept: [
      "蔣經國基金會獎助國際合作研究計畫：「漢語詞彙語意變遷的計算模型」<br>Research project with grant from Chiang Ching-kuo Foundation for International Scholarly Exchange: \"Computational Modeling on Lexical Semantic Changes in Classical Chinese\"",
      "臺灣大學語言學研究所謝舒凱教授與德國杜賓根大學 Harald Baayen 共同合作<br>Dr. Shu-Kai Hsieh, Graduate Institute of Linguistics, National Taiwan University, with Harald Baayen of University of Tübingen, Tübingen (Germany)"
    ],
    degree: "專任計畫研究助理<br>Full-time research assistant",
    start_at: "2021.07",
    end_at: "2022.01",
  },
  // {
  //   name: "Udacity-Bertelsmann School",
  //   dept: [
  //     "線上課程讀書會成員<br>Study group member of the online study program",
  //     "Slack #Motivation 版版主<br>Student leader of the #Motivation channel on Slack",
  //   ],
  //   degree: "商業預測分析<br>Predictive Analytics for Business",
  //   start_at: "2020.10",
  //   end_at: "2021.09",
  // },
  // {
  //   name: "英文家教<br>English tutoring",
  //   dept: [
  //     "2018.12–2019.03<br>報考外文所準備 <br>Tutor for essay questions of M.A. programs in Foreign Literature",
  //     "2016.02–2016.6<br>國三英文課後自修解題助教<br>After-school assistant teacher",
  //     "2013.11–2015.02, 2016.07–2017.01<br>國高中一對一英文家教<br>One-on-one tutor for high school and junior high school students ",
  //   ],
  //   degree: "",
  //   start_at: "2013.11",
  //   end_at: "2019.03",
  // },
];

makeTimeline(
  experience,
  "experience-container timeline-container",
  "experience"
);

// const extracurricular = [
//   {
//     name: "連加網路商業股份有限公司<br>LINE Pay Taiwan Limited",
//     dept: [
//       "經營管理總處董事會秘書部門 Board of Directors (BoD) Affairs, Business Management (BM)",
//     ],
//     degree: "董事會秘書 - 中-英筆譯譯者<br>BoD Secretary - Chinese-English Translator",
//     start_at: "2024.02",
//     end_at: "2025.09",
//   }
// ]

// makeTimeline(
//   extracurricular,
//   "extracurricular-container timeline-container",
//   "extracurricular"
// );