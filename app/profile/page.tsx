import getCurrentUser from "../actions/getCurrentUser";
import Welcome from "../components/home/Welcome";

const Profile = async () => {
    const currentUser = await getCurrentUser();

    return (
        <div>
            <Welcome currentUser={currentUser} />
        </div>
    )
}

export default Profile