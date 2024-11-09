const ProfileCard = ({ name, bio, imageUrl }) => (
    <div className="profile-card">
      <img width='25%' src={imageUrl} alt={`${name} profile`} />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
      );    


export default ProfileCard;