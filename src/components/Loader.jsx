
export default function Loader() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <div className="loader" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}