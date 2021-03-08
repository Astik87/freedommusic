export class Request {
  
  url = null;
  type = null;
  success = null;
  error = null;
  dataType = null;
  data = null;
  async = true;
  
  send() {
    if (this.url == null || this.type == null 
      || this.dataType == null || this.success == null) {
        return false;
    }

    $.ajax({
      type: this.type,
      url: this.url,
      data: this.data,
      dataType: this.dataType,
      async: this.async,
      success: this.success,
      error: this.error
    });

  }

  get(name) {
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
  }

}