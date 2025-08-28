import Song from "./Song";

export default function SetList() {
  return (
    <div class="setlist-content" id="setlist">
      <h1 class="album-title">KARMA</h1>
      <div class="setlist-main">
        <div class="karma-mashup">
          <iframe
            class="karma-mashup-video"
            src="https://www.youtube.com/embed/xczxm12H_mc?si=Ziwtv7Nli39TR7pE&amp;controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
        <div class="songs">
          <Song
            song={"Bleep (삐처리)"}
            link={"https://youtu.be/sXrK-mP_G9U?si=xb9MLbkQ_K7bzSqT"}
          />
          <Song
            song={"Ceremony"}
            link={"https://youtu.be/p2AP0yKIlx4?si=2jhTnOfnh_H3RirH"}
          />
          <Song
            song={"Creed"}
            link={"https://youtu.be/NQxS_nwPZzI?si=0ggfaXqLtn0fjC1z"}
          />
          <Song
            song={"Mess (엉망)"}
            link={"https://youtu.be/Q-rDglVNQO0?si=rMzGadSghHZZaR1O"}
          />
          <Song
            song={"In My Head"}
            link={"https://youtu.be/jQ7W5A-wwKo?si=FcFJspbQhU5SGxFt"}
          />
          <Song
            song={"Half Time (반전)"}
            link={"https://youtu.be/Hzp7hy0lIIM?si=2lEDs67uzhyRQ2Bi"}
          />
          <Song
            song={"Phoenix"}
            link={"https://youtu.be/QZtn6ec0rH4?si=HjkFZWkYlZA0Rp2S"}
          />
          <Song
            song={"Ghost"}
            link={"https://youtu.be/c9ZiUXtcaBw?si=1S_tTvm10hT5cmNM"}
          />
          <Song
            song={"0801"}
            link={"https://youtu.be/e-GNJiLFj6Q?si=Md3l-L1lHWokm4Fd"}
          />
          <Song
            song={"Ceremony (Festival version)"}
            link={"https://youtu.be/Ngb6Jj32mB4?si=ilFQbBJYq6HYT8b6"}
          />
          <Song
            song={"Ceremony (English version)"}
            link={"https://youtu.be/SVnJreXFatw?si=LcsimcmGko_nmxzE"}
          />
        </div>
      </div>
    </div>
  );
}
