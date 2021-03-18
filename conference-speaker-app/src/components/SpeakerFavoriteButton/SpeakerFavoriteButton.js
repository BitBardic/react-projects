
const SpeakerFavoriteButton = ({ isFavorite }) => {
    return (
        <div
        className={isFavorite ? 'heartredbutton' : 'heartdarkbutton'}
        ></div>
    );
};

export default SpeakerFavoriteButton;