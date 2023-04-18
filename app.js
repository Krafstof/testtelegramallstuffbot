let tg = window.Telegram.WebApp;
var BackButton = tg.BackButton;
BackButton.show();

BackButton.addEventListener('click', () => {
 tg.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);
});
//<iframe src="iframeInner.html" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe>