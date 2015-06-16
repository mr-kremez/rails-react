var RecordEditForm = React.createClass({
  handleEditRecord: function(e) {
    e.preventDefault();
    var data = {
      date: React.findDOMNode(this.refs.date).value,
      title: React.findDOMNode(this.refs.title).value,
      amount: React.findDOMNode(this.refs.amount).value
    };
    this.props.handleEdit(data);
  },
  render: function() {
    return (
      <tr className='active'>
        <td className='col-md-4'>
          <input type='date' className='form-control' defaultValue={this.props.record.date} ref='date' />
        </td>
        <td>
          <input type='text' className='form-control' defaultValue={this.props.record.title} ref='title' />
        </td>
        <td>
          <input type='number' className='form-control' defaultValue={this.props.record.amount} ref='amount' />
        </td>
        <td>
          <div className="btn-group btn-group-sm" role="group" >
            <button type="button" className='btn btn-default' onClick={this.handleEditRecord}>Update</button>
            <button type="button" className='btn btn-danger' onClick={this.props.handleToggle}>Cancel</button>
          </div>
        </td>
      </tr>
    );
  }
});