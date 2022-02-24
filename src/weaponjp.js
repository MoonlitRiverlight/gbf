(function(){

// Check page correctness
if (!location.hash.match("#gacha/weapon")) {
  const answer = confirm("You don't seem to be in #gacha/weapon page. Run anyway?");
  if (answer === false) return;
}

const ID = document.querySelector('.prt-weapon-image > .img-weapon').getAttribute("src").match(/\/g\/(.+?)\./)[1];

const NAME = (() => {
  const largeBanner = document.querySelector(".txt-item-name")?.textContent;
  const smallBanner = document.querySelector(".prt-weapon-info > div:first-child")?.textContent;
  return (largeBanner) ? largeBanner : smallBanner;
})();

const OUGI_NAME = document.querySelector(".prt-detail-special .name-m").textContent;
const OUGI_DESC = document.querySelector(".prt-detail-special .comment-m").textContent;

const SKILL_ONE_NAME = document.querySelector(".prt-detail-support > .prt-box:nth-child(2) > .name-m")?.textContent;
const SKILL_ONE_DESC = document.querySelector(".prt-detail-support > .prt-box:nth-child(2) > .comment-m")?.textContent;

const SKILL_TWO_NAME = document.querySelector(".prt-detail-support > .prt-box:nth-child(3) > .name-m")?.textContent;
const SKILL_TWO_DESC = document.querySelector(".prt-detail-support > .prt-box:nth-child(3) > .comment-m")?.textContent;

const SKILL_THREE_NAME = document.querySelector(".prt-detail-support > .prt-box:nth-child(4) > .name-m")?.textContent;
const SKILL_THREE_DESC = document.querySelector(".prt-detail-support > .prt-box:nth-child(4) > .comment-m")?.textContent;


const FLAVOR = document.querySelector(".prt-flavor").textContent.trim();

const result = nonEmpty`{{
PASTE BELOW FLAVOR, VERIFY ID MATCHES ${ID} AND DELETE THIS LINE
|jp_name=${NAME}
|jp_ougi_name=${OUGI_NAME}
|jp_ougi=${OUGI_DESC}
|jp_ougi_4s=
|jp_s1_name=${SKILL_ONE_NAME}
|jp_s1_desc=${SKILL_ONE_DESC}
|jp_s1_4s_name=
|jp_s1_4s_icon=
|jp_s1_4s_desc=
|jp_s2_name=${SKILL_TWO_NAME}
|jp_s2_desc=${SKILL_TWO_DESC}
|jp_s2_4s_name=
|jp_s2_4s_desc=
|jp_s3_name=${SKILL_THREE_NAME}
|jp_s3_desc=${SKILL_THREE_DESC}
|jp_s3_4s_name=
|jp_s3_4s_desc=
|jp_flavor=${FLAVOR}
}}
`;

copyToClipboard(result);

})();
