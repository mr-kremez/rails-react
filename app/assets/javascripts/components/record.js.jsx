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
  handleEdit: function(data) {
    var url = '/records/' + this.props.record.id;
    var self = this;
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
  render: function() {
    if(this.state.edit) {
      return <RecordEditForm record={this.props.record} handleEdit={this.handleEdit} handleToggle={this.handleToggle} />;
    } else {
      return <RecordViewForm record={this.props.record} handleToggle={this.handleToggle} handleDelete={this.handleDelete} />;
    }
  }
});