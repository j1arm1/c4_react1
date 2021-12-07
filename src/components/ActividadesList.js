function ActividadesList(props) {
    return (
        <a href="none" className="list-group-item list-group-item-action" aria-current="true">
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{ props.nombreA }</h5>
                <small>{ props.fechaA }</small>
                </div>
                <p className="mb-1">{ props.descripcionA }</p>
           
            </a>
    );
}
export default ActividadesList;