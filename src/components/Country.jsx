import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Medal from './Medal'

function Country({ id, name, medals, onDelete }) {
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
                {medals.map((medal) => (
                    <Medal key={medal.id} name={medal.name} />
                ))}
            </div>
        </div>
    )
}

export default Country