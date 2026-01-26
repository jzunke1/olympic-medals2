import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


function Country({ id, name, gold, onDelete }) {
    function handleDelete() {
        onDelete(id)
    }

    return (
        <div className="country-card">
            <div className="country-header">
                <h3 className="country-name" style={{ fontSize: '1.5rem' }}>{name}</h3>
                <button type="button" className="delete-btn" onClick={handleDelete} title="Delete country">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
            <hr />
            <div className="country-medals">
                <p>Gold Medals: {gold}</p>
            </div>
        </div>
    )
}

export default Country