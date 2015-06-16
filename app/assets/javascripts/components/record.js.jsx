var Record = React.createClass({
  getInitialState: function() {
    return {
      edit: false
    }
  },
  handleToggle: function(e) {
    e.preventDefault();
    this.setState({ edit: !this.state.edit });
  },
  handleDelete: function(e) {
    e.preventDefault();
    var url = '/records/' + this.props.record.id;
    var self = this;
    $.ajax({
      method: 'DELETE',
      url: url,
      dataType: 'JSON',
      success: function() {
        self.props.handleDeleteRecord(self.props.record);
      }
    });
  },
  handleEdit: function(e) {
    e.preventDefault();
    var url = '/records/' + this.props.record.id;
    var self = this;
    var data = {
      date: React.findDOMNode(this.refs.date).value,
      title: React.findDOMNode(this.refs.title).value,
      amount: React.findDOMNode(this.refs.amount).value,
    };
    $.ajax({
      method: 'PUT',
      url: url,
      dataType: 'JSON',
      data: {record: data},
      success: function(data) {
        self.setState({edit: false});
        self.props.handleEditRecord(self.props.record, data);
      }
    });
  },
  recordRow: function() {
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
            <button type="button" className='btn btn-default' onClick={this.handleToggle}>Edit</button>
            <button type="button" className='btn btn-danger' onClick={this.handleDelete}>Delete</button>
          </div>
        </td>
      </tr>
    );
  },
  recordForm: function() {
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
            <button type="button" className='btn btn-xs btn-default' onClick={this.handleEdit}>Update</button>
            <button type="button" className='btn btn-xs btn-danger' onClick={this.handleToggle}>Cancel</button>
          </div>
        </td>
      </tr>
    );
  },
  render: function() {
    if(this.state.edit) {
      return this.recordForm();
    } else {
      return this.recordRow();
    }
  }
});