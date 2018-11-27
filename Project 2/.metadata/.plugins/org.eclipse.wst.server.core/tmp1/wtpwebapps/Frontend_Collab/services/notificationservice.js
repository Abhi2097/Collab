/**
 *  NotificationService
 */
app.factory('NotificationService',function($http){
	var notificationService={}
	
	notificationService.getAllNotifications=function(){
		return $http.get("http://localhost:9090/middleware_Collab/getallnotifications")
	}
	
	
	notificationService.getNotification=function(notificationId){
		return $http.get("http://localhost:9090/middleware_Collab/getnotification/"+notificationId)
	}
	
	notificationService.updateNotification=function(notificationId){
		return $http.put("http://localhost:9090/middleware_Collab/updatenotification/"+notificationId);
	}
	
	return notificationService;
})