var RecordViewForm = React.createClass({
  render: function() {
    var trType = 'success';
    if(this.props.record.amount < 0) {
      trType = 'danger';
    }
    return (
      <tr className={trType}>
        <td>{this.props.record.date}</td>
        <td>{this.props.record.title}</td>
        <td>{amountFormat(this.props.record.amount)}</td>
        <td>
          <div className="btn-group btn-group-sm" role="group" >
            <button type="button" className='btn btn-default' onClick={this.props.handleToggle}>Edit</button>
            <button type="button" className='btn btn-danger' onClick={this.props.handleDelete}>Delete</button>
          </div>
        </td>
      </tr>
    );
  }
});