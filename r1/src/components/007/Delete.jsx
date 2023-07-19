import { KEY } from "../../App";
import { destroy } from "../../functions/localStorage";

export default function Delete({ setDeleteData, deleteData, setLastUpdate }) {

    const doDestroy = _ => {
        if (deleteData.sum > 0) {
            return alert('Can\'t delete account with balance');
        } else {
            destroy(KEY, deleteData.id);
            setDeleteData(null);
            setLastUpdate(Date.now());
        }
    };

    return (
        <div className="modal show">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete this account</h5>
                        <button type="button" className="btn-close" onClick={_ => setDeleteData(null)}></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete this account?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={_ => setDeleteData(null)}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={doDestroy}>Yes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}