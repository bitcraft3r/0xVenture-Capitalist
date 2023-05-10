import getCurrentUser from "../../actions/getCurrentUser";
import Welcome from "./Welcome";

const Profile = async () => {
    const currentUser = await getCurrentUser();

    return (
        <div>
            <Welcome currentUser={currentUser} />
            {/* currentUser.admin === true && <div>Show Admin Button</div> */}
        </div>
    )
}

export default Profile