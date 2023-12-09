package com.valonge.model;


public class ResponseJson {
	private String message;
	private boolean error;
	private Object object;

	
	public ResponseJson(String message, boolean error) {
		super();
		this.message = message;
		this.error = error;
	}
	
	

	public ResponseJson() {
		super();
	}



	public ResponseJson(String message, boolean error, Object object) {
		super();
		this.message = message;
		this.error = error;
		this.object = object;
	}
	

	public Object getObject() {
		return object;
	}



	public void setObject(Object object) {
		this.object = object;
	}



	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public boolean isError() {
		return error;
	}

	public void setError(boolean error) {
		this.error = error;
	}
	
}
