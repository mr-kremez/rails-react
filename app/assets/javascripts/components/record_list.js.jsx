var RecordList = React.createClass({
  render: function() {
    var self = this;
    var tableRows = this.props.records.map(function(item){
      return (
        <Record key={item.id} record={item} handleDeleteRecord={self.props.deleteRecord} handleEditRecord={self.props.updateRecord} />
      );
    });
    return (
      <table className='table table-bordered'>
        <thead>
          <th>Date</th>
          <th>Title</th>
          <th>Amount</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    );
  }
});