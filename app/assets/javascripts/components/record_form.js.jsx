var RecordForm = React.createClass({
  getInitialState: function() {
    return {
      title: '',
      date: '',
      amount: ''
    };
  },
  handleChange: function(e) {
    var obj = {};
    obj[e.target.name] = e.target.value;
    this.setState(obj);
  },
  valid: function() {
    return (this.state.title && this.state.date && this.state.amount);
  },
  handleSubmit: function(e) {
    e.preventDefault();
    self = this;
    $.post( '', { record: this.state }, function(data) {
      self.props.handleNewRecord(data);
      self.setState(self.getInitialState());
    }, 'JSON');
  },
  render: function() {
    return (
      <form className='form-inline' onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <input type='date' className='form-control' placeholder='Date' name='date' value={this.state.date} onChange={this.handleChange} />
          <input type='text' className='form-control' placeholder='Title' name='title' value={this.state.title} onChange={this.handleChange} />
          <input type='number' className='form-control' placeholder='Amount' name='amount' value={this.state.amount} onChange={this.handleChange} />
          <button type='submit' className='btn btn-primary' disabled={!this.valid()}>Create Record</button> 
        </div>
      </form>
    );
  }
});