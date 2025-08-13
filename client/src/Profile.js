import bangChan from "./assets/HoorayBangChan.JPEG";
import leeKnow from "./assets/HoorayLeeKnow.JPEG";
import changbin from "./assets/HoorayChangbin.JPEG";
import hyunjin from "./assets/HoorayHyunjin.JPEG";
import han from "./assets/HoorayHAN.JPEG";
import felix from "./assets/HoorayFelix.JPEG";
import seungmin from "./assets/HooraySeungmin.JPEG";
import jeongin from "./assets/HoorayIN.JPEG"; /** I.N is labeled as jeongin for syntax purposes */
import ProfileCard from "./ProfileCard";

export default function Profile() {
  return (
    <div id="profile">
      <div class="profiles-bg">
        <ProfileCard
          image={bangChan}
          id="bang-chan"
          name="Bang Chan"
          dob="3 October 1997"
        />
        <ProfileCard
          image={leeKnow}
          id="lee-know"
          name="Lee Know"
          dob="25 October 1998"
        />
        <ProfileCard
          image={changbin}
          id="changbin"
          name="Changbin"
          dob="11 August 1999"
        />
        <ProfileCard
          image={hyunjin}
          id="hyunjin"
          name="Hyunjin"
          dob="20 March 2000"
        />
        <ProfileCard image={han} id="han" name="HAN" dob="14 September 2000" />
        <ProfileCard
          image={felix}
          id="felix"
          name="Felix"
          dob="15 September 2000"
        />
        <ProfileCard
          image={seungmin}
          id="seungmin"
          name="Seungmin"
          dob="22 September 2000"
        />
        <ProfileCard
          image={jeongin}
          id="jeongin"
          name="I.N"
          dob="8 Febuary 2001"
        />
      </div>
    </div>
  );
}
