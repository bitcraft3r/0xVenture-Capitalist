'use client'

const AdminDashboard = () => {

    // Function to call the api endpoint to reset a player's coins to 0 and delete all their businesses and upgrades
    const handleResetPlayer = async (requesterId: string, userId: string) => {
        // requesterId is the id of the admin who is requesting the reset
        // userId is the id of the player who is being reset

        try {
            fetch(`/api/admin/reset/${requesterId}?userId=${userId}`, { method: "GET" })
                .then((response) => {
                    if (response.ok) {
                        console.log(`response`, response)
                    } else {
                        console.log(`response`, response)
                    }
                })
                .catch((error) => {
                    console.log(`error`, error)
                })
        } catch (error) {

        }

    }

    // UI options:
    // Option A: list all players in a table. have a button for each player to call api (+extra popup to confirm).
    // Option B: admin input a player's id (or email?) and click a button to call this API endpoint.

    return (
        <div>
            AdminDashboard
            <div>
                <button
                    onClick={() => handleResetPlayer("requesterId", "userId")}
                    className="border rounded-xl px-4 py-2"
                >
                    Reset Player
                </button>
            </div>
        </div>
    )
}

export default AdminDashboard