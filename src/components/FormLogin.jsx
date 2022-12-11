import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'

function FormLogin({data}) {
    
    return (
        <>
            <div className="form-group position position-relative w-100 mb-2">
                <FontAwesomeIcon
                    icon={faUser}
                    className="icon position position-absolute"
                />
                <input
                    id="user"
                    type="text"
                    className="form-control py-2 pr-2 pl-6 w-100 bg bg-color-tertiary"
                    placeholder="Username (Email Address)"
                    name="user"
                    defaultValue={data?.user}
                />
            </div>
            <div className="form-group position position-relative w-100 mb-4">
                <FontAwesomeIcon
                    icon={faKey}
                    className="icon position position-absolute"
                />
                <input
                    id="password"
                    type="password"
                    className="form-control py-2 pr-2 pl-6 w-100 bg bg-color-tertiary"
                    placeholder="Password"
                    name="password"
                    defaultValue={data?.password}
                />
            </div>
        </>
    )
}

export default FormLogin