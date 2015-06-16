var RecordBox = React.createClass({
  getInitialState: function() {
    return { records: this.props.data };
  },
  getDefaultProps: function() {
    return { records: [] };
  },
  addRecord: function(record) {
    var records = React.addons.update(this.state.records, { $push: [record] });
    this.setState({records: records});
  },
  deleteRecord: function(record) {
    var index = this.state.records.indexOf(record);
    var records = React.addons.update(this.state.records, { $splice: [[index, 1]] });
    this.replaceState({records: records});
  },
  updateRecord: function(record, data) {
    var index = this.state.records.indexOf(record);
    var records = React.addons.update(this.state.records, { $splice: [[index, 1, data]] });
    this.replaceState({records: records});
  },
  credits: function() {
    var credits = this.state.records.filter(function(el) { return (el.amount >= 0) });
    return credits.reduce(function(prev, curr) { return (prev += parseFloat(curr.amount)); }, 0);
  },
  debits: function() {
    var debits = this.state.records.filter(function(el) { return (el.amount < 0) });
    return debits.reduce(function(prev, curr) { return (prev += parseFloat(curr.amount)); }, 0);
  },
  balance: function() {
    return (this.credits() + this.debits());
  },
  render: function() {
    return (
      <div className='records'>
        <h2 className='title'>
        Records
        </h2>
        <div className='row'>
          <AmountBox text='Credit' amount={this.credits()} panelType='success' />
          <AmountBox text='Debit' amount={this.debits()} panelType='danger' />
          <AmountBox text='Balance' amount={this.balance()} panelType='primary' />
        </div>
        <RecordForm handleNewRecord={this.addRecord} />
        <hr />
        <RecordList deleteRecord={this.deleteRecord} updateRecord={this.updateRecord} records={this.state.records} />
      </div>
    );
  }
});