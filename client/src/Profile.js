import bangChan from "./assets/HoorayBangChan.JPEG";
import leeKnow from "./assets/HoorayLeeKnow.JPEG";
import changbin from "./assets/HoorayChangbin.JPEG";
import hyunjin from "./assets/HoorayHyunjin.JPEG";
import han from "./assets/HoorayHAN.JPEG";
import felix from "./assets/HoorayFelix.JPEG";
import seungmin from "./assets/HooraySeungmin.JPEG";
import jeongin from "./assets/HoorayIN.JPEG"; /** I.N is labeled as jeongin for syntax purposes */

export default function Profile() {
  const bangChanInfo = () => {
    return (
      <div>
        <h1>Bang Chan</h1>
        <p>방찬</p>
      </div>
    );
  };
  return (
    <div id="profile">
      <div class="profiles-bg">
        <div class="pfp-card">
          <div class="pfp-i">
            <img src={bangChan} alt="Bang Chan" />
          </div>
        </div>
        <div class="pfp-card">
          <div class="pfp-i">
            <img src={leeKnow} alt="Lee Know" />
          </div>
        </div>
        <div class="pfp-card">
          <div class="pfp-i">
            <img src={changbin} alt="Changbin" />
          </div>
        </div>
        <div class="pfp-card">
          <div class="pfp-i">
            <img src={hyunjin} alt="Hyunjin" />
          </div>
        </div>
        <div class="pfp-card">
          <div class="pfp-i">
            <img src={han} alt="Han" />
          </div>
        </div>
        <div class="pfp-card">
          <div class="pfp-i">
            <img src={felix} alt="Felix" />
          </div>
        </div>
        <div class="pfp-card">
          <div class="pfp-i">
            <img src={seungmin} alt="Seungmin" />
          </div>
        </div>
        <div class="pfp-card">
          <div class="pfp-i">
            <img src={jeongin} alt="Jeongin" />
          </div>
        </div>
      </div>
      {/**
        <div className="profile" id="profile">
      <div class="individual-profile">
        <div class="profile-info">
          <h1>Bang Chan</h1>
          <p>방찬</p>
        </div>
        <div class="pfp-border">
          <img src={bangChan} class="pfp" />
        </div>
      </div>
      <hr />
      <div class="individual-profile">
        <div class="profile-info">
          <h1>Lee Know</h1>
          <p>리노</p>
        </div>
        <div class="pfp">
          <div class="pfp-border">
            <img src={leeKnow} class="pfp" />
          </div>
        </div>
      </div>
      <hr />
      <div class="individual-profile">
        <div class="profile-info">
          <h1>Chanbin</h1>
          <p>창빈</p>
        </div>
        <div class="pfp-border">
          <img src={changbin} class="pfp" />
        </div>
      </div>
      <hr />
      <div class="individual-profile">
        <div class="profile-info">
          <h1>Hyunjin</h1>
          <p>현진</p>
        </div>
        <div class="pfp-border">
          <img src={hyunjin} class="pfp" />
        </div>
      </div>
      <hr />
      <div class="individual-profile">
        <div class="profile-info">
          <h1>Han</h1>
          <p>한</p>
        </div>
        <div class="pfp-border">
          <img src={han} class="pfp" />
        </div>
      </div>
      <hr />
      <div class="individual-profile">
        <div class="profile-info">
          <h1>Felix</h1>
          <p>필릭스</p>
        </div>
        <div class="pfp-border">
          <img src={felix} class="pfp" />
        </div>
      </div>
      <hr />
      <div class="individual-profile">
        <div class="profile-info">
          <h1>Seungmin</h1>
          <p>승민</p>
        </div>
        <div class="pfp-border">
          <img src={seungmin} class="pfp" />
        </div>
      </div>
      <hr />
      <div class="individual-profile">
        <div class="profile-info">
          <h1>I.N</h1>
          <p>아이엔</p>
        </div>
        <div class="pfp-border">
          <img src={jeongin} class="pfp" />
        </div>
      </div>
    </div>
    */}
    </div>
  );
}
