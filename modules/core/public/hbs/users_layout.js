{"layout":{"p":"layout","tf":"function (Handlebars,depth0,helpers,partials,data) {\n  this.compilerInfo = [2,'>= 1.0.0-rc.3'];\nhelpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials; data = data || {};\n  var buffer = \"\", stack1, stack2, options, functionType=\"function\", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;\n\nfunction program1(depth0,data) {\n  \n  \n  return \"Core\";\n  }\n\nfunction program3(depth0,data) {\n  \n  var buffer = \"\", stack1, stack2, options;\n  buffer += \"\\n            <ul class=\\\"nav nav-pills\\\">\\n              <li \";\n  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};\n  if (stack1 = helpers.pageUserActive) { stack1 = stack1.call(depth0, options); }\n  else { stack1 = depth0.pageUserActive; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  if (!helpers.pageUserActive) { stack1 = blockHelperMissing.call(depth0, stack1, options); }\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \">\\n\t\t\t\t\";\n  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.perm)),stack1 == null || stack1 === false ? stack1 : stack1.core_me_view), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});\n  if(stack2 || stack2 === 0) { buffer += stack2; }\n  buffer += \"\\n\t\t\t  </li>\\n              <li \";\n  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};\n  if (stack2 = helpers.pageUsersActive) { stack2 = stack2.call(depth0, options); }\n  else { stack2 = depth0.pageUsersActive; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }\n  if (!helpers.pageUsersActive) { stack2 = blockHelperMissing.call(depth0, stack2, options); }\n  if(stack2 || stack2 === 0) { buffer += stack2; }\n  buffer += \">\\n\t\t\t\t\";\n  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.perm)),stack1 == null || stack1 === false ? stack1 : stack1.core_user_view), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});\n  if(stack2 || stack2 === 0) { buffer += stack2; }\n  buffer += \"\\n\t\t\t  </li>\\n              <li \";\n  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};\n  if (stack2 = helpers.pageSystemSettingsActive) { stack2 = stack2.call(depth0, options); }\n  else { stack2 = depth0.pageSystemSettingsActive; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }\n  if (!helpers.pageSystemSettingsActive) { stack2 = blockHelperMissing.call(depth0, stack2, options); }\n  if(stack2 || stack2 === 0) { buffer += stack2; }\n  buffer += \">\\n\t\t\t\t\";\n  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.perm)),stack1 == null || stack1 === false ? stack1 : stack1.core_sysadmin), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});\n  if(stack2 || stack2 === 0) { buffer += stack2; }\n  buffer += \"\\n\t\t\t  </li>\\n\t\t\t  <li>\\n\t\t\t\t<a href=\\\"/logout?success=\";\n  if (stack2 = helpers.url) { stack2 = stack2.call(depth0, {hash:{},data:data}); }\n  else { stack2 = depth0.url; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }\n  buffer += escapeExpression(stack2)\n    + \"\\\">\";\n  options = {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data};\n  if (stack2 = helpers.i18n) { stack2 = stack2.call(depth0, options); }\n  else { stack2 = depth0.i18n; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }\n  if (!helpers.i18n) { stack2 = blockHelperMissing.call(depth0, stack2, options); }\n  if(stack2 || stack2 === 0) { buffer += stack2; }\n  buffer += \"</a>\\n\t\t\t  </li>\\n            </ul>\\n           \";\n  return buffer;\n  }\nfunction program4(depth0,data) {\n  \n  \n  return \"class=\\\"active\\\"\";\n  }\n\nfunction program6(depth0,data) {\n  \n  var buffer = \"\", stack1, options;\n  buffer += \"<a href=\\\"\";\n  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1)\n    + \"/user\\\">\";\n  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};\n  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }\n  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \"</a>\";\n  return buffer;\n  }\nfunction program7(depth0,data) {\n  \n  \n  return \"My account\";\n  }\n\nfunction program9(depth0,data) {\n  \n  var buffer = \"\", stack1, options;\n  buffer += \"<a href=\\\"\";\n  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1)\n    + \"/users\\\">\";\n  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};\n  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }\n  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \"</a>\";\n  return buffer;\n  }\nfunction program10(depth0,data) {\n  \n  \n  return \"Manage users\";\n  }\n\nfunction program12(depth0,data) {\n  \n  var buffer = \"\", stack1, options;\n  buffer += \"<a href=\\\"\";\n  if (stack1 = helpers.prefix) { stack1 = stack1.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.prefix; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1)\n    + \"/sysset\\\">\";\n  options = {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data};\n  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }\n  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \"</a>\";\n  return buffer;\n  }\nfunction program13(depth0,data) {\n  \n  \n  return \"System settings\";\n  }\n\nfunction program15(depth0,data) {\n  \n  \n  return \"Logout\";\n  }\n\nfunction program17(depth0,data) {\n  \n  \n  return \"Copyright by PushOk Software\";\n  }\n\n  buffer += \"<!DOCTYPE HTML>\\n<html lang=\\\"en-us\\\">\\n<head>\\n\t<meta http-equiv=\\\"Content-type\\\" content=\\\"text/html; charset=utf-8\\\">\\n\t<meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n\t<title>\";\n  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1)\n    + \"</title>\t\\n\t <!-- Le styles -->\t\\n\t<link href=\\\"/core/css/bootstrap.css\\\" rel=\\\"stylesheet\\\"> \t\\n\t<link href=\\\"/core/css/responsive.css\\\" rel=\\\"stylesheet\\\">\\n\t<link href=\\\"/core/css/main.css\\\" rel=\\\"stylesheet\\\">\t\\n    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->\\n    <!--[if lt IE 9]>\\n      <script src=\\\"http://html5shim.googlecode.com/svn/trunk/html5.js\\\"></script>\\n    <![endif]-->\\n    <script type=\\\"text/javascript\\\" src=\\\"/common/js/require.min.js\\\"></script>\\n\t<script type=\\\"text/javascript\\\">\\n\t\tvar _apiToken = '\";\n  if (stack1 = helpers.apiToken) { stack1 = stack1.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.apiToken; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1)\n    + \"';\\n\t\tvar _user = {_id:'\"\n    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1._id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))\n    + \"',language:\\\"\"\n    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.language)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))\n    + \"\\\"};\\n\t\tvar _prefix = '\";\n  if (stack2 = helpers.prefix) { stack2 = stack2.call(depth0, {hash:{},data:data}); }\n  else { stack2 = depth0.prefix; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }\n  buffer += escapeExpression(stack2)\n    + \"';\\n\t</script>\\n    <script type=\\\"text/javascript\\\" src=\\\"\";\n  if (stack2 = helpers.prefix) { stack2 = stack2.call(depth0, {hash:{},data:data}); }\n  else { stack2 = depth0.prefix; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }\n  buffer += escapeExpression(stack2)\n    + \"/js/app.js\\\"></script>    \\n</head>\\n<body>\\n\t<div class=\\\"navbar navbar-fixed-top navbar-inverse\\\">\\n      <div class=\\\"navbar-inner\\\">\\n        <div class=\\\"container\\\">\\n          <a class=\\\"btn btn-navbar\\\" data-toggle=\\\"collapse\\\" data-target=\\\".nav-collapse\\\">\\n            <span class=\\\"icon-bar\\\"></span>\\n            <span class=\\\"icon-bar\\\"></span>\\n            <span class=\\\"icon-bar\\\"></span>\\n          </a>\\n          <a href='/' id=\\\"logoNew\\\"></a>\\n\t\t  <a class=\\\"brand\\\" href=\\\"#\\\">\";\n  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};\n  if (stack2 = helpers.i18n) { stack2 = stack2.call(depth0, options); }\n  else { stack2 = depth0.i18n; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }\n  if (!helpers.i18n) { stack2 = blockHelperMissing.call(depth0, stack2, options); }\n  if(stack2 || stack2 === 0) { buffer += stack2; }\n  buffer += \"</a>          \\n          <div class=\\\"nav-collapse\\\">\\n          \";\n  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.loggedin), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});\n  if(stack2 || stack2 === 0) { buffer += stack2; }\n  buffer += \"\\n          </div><!--/.nav-collapse -->\\n        </div>\\n      </div>\\n    </div>\\n    <div class=\\\"container context\\\">\\n\t\t\";\n  stack2 = self.invokePartial(partials.content, 'content', depth0, helpers, partials, data);\n  if(stack2 || stack2 === 0) { buffer += stack2; }\n  buffer += \"\t\\n    </div> \\n\t<footer class=\\\"footer\\\">\\n    <div class=\\\"container\\\">\t\\n\t\t<br><br><br><br>\\n\t\t<p class=\\\"well-small well\\\">&copy; \";\n  options = {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data};\n  if (stack2 = helpers.i18n) { stack2 = stack2.call(depth0, options); }\n  else { stack2 = depth0.i18n; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }\n  if (!helpers.i18n) { stack2 = blockHelperMissing.call(depth0, stack2, options); }\n  if(stack2 || stack2 === 0) { buffer += stack2; }\n  buffer += \" 2011-2013</p>\\n\t</div>\\n\t</footer>\\n</body>\\n</html>\\n\";\n  return buffer;\n  }","mt":1366280365000,"pt":["content"]},"content":{"p":"content","tf":"function (Handlebars,depth0,helpers,partials,data) {\n  this.compilerInfo = [2,'>= 1.0.0-rc.3'];\nhelpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials; data = data || {};\n  var buffer = \"\", stack1, options, self=this, functionType=\"function\", blockHelperMissing=helpers.blockHelperMissing;\n\nfunction program1(depth0,data) {\n  \n  \n  return \"Add new user\";\n  }\n\nfunction program3(depth0,data) {\n  \n  \n  return \"First name\";\n  }\n\nfunction program5(depth0,data) {\n  \n  \n  return \"Last name\";\n  }\n\nfunction program7(depth0,data) {\n  \n  \n  return \"Login\";\n  }\n\nfunction program9(depth0,data) {\n  \n  var buffer = \"\", stack1;\n  buffer += \"\\n\t\t\t\t\";\n  stack1 = self.invokePartial(partials.users_row, 'users_row', depth0, helpers, partials, data);\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \"\\n\t\t\t\";\n  return buffer;\n  }\n\nfunction program11(depth0,data) {\n  \n  \n  return \"Are you sure?\";\n  }\n\n  buffer += \"<div id=\\\"users\\\">\\n<div class=\\\"row\\\">\\n\t<div class=\\\"span4\\\">\t\t\\n\t\t<button class=\\\"btn\\\" name=\\\"addNewUser\\\" >\";\n  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};\n  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }\n  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \"</button>\t\t\\n\t</div>\\n\t<br><br><br>\\n</div>\\n<div class=\\\"row\\\">\\n\t<div class=\\\"span12\\\">\\n\t\t<table class=\\\"table table-condensed\\\">\\n\t\t\t<thead>\\n\t\t\t<tr>\\n\t\t\t\t<th >#</th>\\n\t\t\t\t<th>\";\n  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};\n  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }\n  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \"</th>\\n\t\t\t\t<th>\";\n  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};\n  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }\n  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \"</th>\\n\t\t\t\t<th>\";\n  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};\n  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }\n  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \"</th>\\n\t\t\t\t<th></th>\\n\t\t\t</tr>\\n\t\t\t</thead>\\n\t\t\t<tbody>\\n\t\t\t\";\n  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data};\n  if (stack1 = helpers.users) { stack1 = stack1.call(depth0, options); }\n  else { stack1 = depth0.users; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  if (!helpers.users) { stack1 = blockHelperMissing.call(depth0, stack1, options); }\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \"\\n\t\t\t</tbody>\\n\t\t</table>\\n\t</div>\\n</div>\\n</div>\\n<script type=\\\"text/javascript\\\">\\nrequire([\\\"jquery\\\",\\\"jquery-block\\\",\\\"bootstrap\\\"], function ($) {\\n$(document).ready(function() {\\n\t$page = $(\\\"#users\\\");\\n\t$page.on('click', \\\"a[name=\\\\\\\"editUser\\\\\\\"]\\\", function(evt){\\n\t\tevt.preventDefault();\t\t\\n\t\t$this = $(this);\\n        var uid = $this.attr('uid');  \t\t\\n\t\tvar $me = $(this).closest(\\\".users_row\\\");\\n\t\t$me.block();\\n\t\t(function (cb) {\\n\t\t\trequire(['api','clitpl','safe'], function (api,tf,safe) {\\n\t\t\t\tapi.call('core.getUserById', uid, safe.sure(cb, function (user) {\\n\t\t\t\t\ttf.render('user_prefs_edit', {luser:user}, safe.sure(cb,function(text, ctx) {\\n\t\t\t\t\t\t$me.unblock();\t\t\t\t\t\t\t\t\t\t\t\t\t\t\\n\t\t\t\t\t\t$(\\\"body\\\").append(text);\\n\t\t\t\t\t\tvar $modal = $(\\\"#\\\"+ctx.uniq).modal();\\n\t\t\t\t\t\t$modal.on(\\\"frm-saved\\\", function (evt, user) {\\n\t\t\t\t\t\t\tapi.call('core.getUserById', uid, safe.sure(cb, function (user) {\t\t\t\t\t\t\t\\n\t\t\t\t\t\t\t\ttf.render('users_row',user, safe.sure(cb, function(text) {\\n\t\t\t\t\t\t\t\t\t$me.before(text)\\n\t\t\t\t\t\t\t\t\t$me.remove()\\n\t\t\t\t\t\t\t\t\t$modal.modal('hide')\\n\t\t\t\t\t\t\t\t\tcb();\t\t\t\t\t\t\t\t\t\\n\t\t\t\t\t\t\t\t}))\\n\t\t\t\t\t\t\t}))\\n\t\t\t\t\t\t})\\n\t\t\t\t\t}))\\n\t\t\t\t}))\\n\t\t\t},cb)\\n\t\t})(function (err) {\\n\t\t\tif (err) appError(err);\\n\t\t\t$me.unblock();\\n\t\t})\\n\t\treturn false;\\n\t});\\n\t$page.on(\\\"click\\\", \\\"a[name=\\\\\\\"editPerm\\\\\\\"]\\\",function(evt){\\n\t\tevt.preventDefault();\t\t\\n\t})\\n\t$page.on(\\\"click\\\", \\\"a[name=\\\\\\\"deleteUser\\\\\\\"]\\\",function(evt) {\\n\t\tevt.preventDefault();\\n\t\tif (!confirm(\\\"\";\n  options = {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data};\n  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }\n  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \"\\\"))\\n\t\t\treturn false;\\n\t\tvar uid = $(this).attr('uid');\t\t\\n\t\tvar $me = $(this).closest(\\\".users_row\\\");\\n\t\t$me.block();\\n\t\t(function (cb) {\\n\t\t\trequire(['api','safe'], function (api,safe) {\\n\t\t\t\tapi.call('core.deleteUser', uid, safe.sure(cb, function () {\\n\t\t\t\t\t$me.remove();\\n\t\t\t\t}))\\n\t\t\t},cb)\\n\t\t})(function (err) {\\n\t\t\tif (err) appError(err);\\n\t\t\t$me.unblock();\\n\t\t})\t\\n\t});\\n\t$page.on(\\\"click\\\", \\\"button[name=\\\\\\\"addNewUser\\\\\\\"]\\\",function(evt){\\n\t\tevt.preventDefault();\t\t\\n\t\t$this = $(this);\\n\t\tvar $me = $page;\\n\t\t$me.block();\\n\t\t(function (cb) {\\n\t\t\trequire(['api','clitpl','safe'], function (api,tf,safe) {\\n\t\t\t\ttf.render('user_prefs_edit', {luser:{}}, safe.sure(cb,function(text, ctx) {\\n\t\t\t\t\t$me.unblock();\t\t\t\t\t\t\t\t\t\t\t\t\t\t\\n\t\t\t\t\t$(\\\"body\\\").append(text);\\n\t\t\t\t\tvar $modal = $(\\\"#\\\"+ctx.uniq).modal();\\n\t\t\t\t\t$modal.on(\\\"frm-saved\\\", function (evt, user) {\\n\t\t\t\t\t\ttf.render('users_row',user, safe.sure(cb, function(text) {\\n\t\t\t\t\t\t\t$page.find(\\\"tbody\\\").prepend(text)\\n\t\t\t\t\t\t\t$modal.modal('hide')\\n\t\t\t\t\t\t\tcb();\t\t\t\t\t\t\t\t\t\\n\t\t\t\t\t\t}))\\n\t\t\t\t\t})\\n\t\t\t\t}))\\n\t\t\t},cb)\\n\t\t})(function (err) {\\n\t\t\tif (err) appError(err);\\n\t\t\t$me.unblock();\\n\t\t})\\n\t\treturn false;\t\t\\n\t});\t\\n});\\n})\\n</script>\\n\";\n  return buffer;\n  }","mt":1366286122000,"pt":["users_row"]},"users_row":{"p":"users_row","tf":"function (Handlebars,depth0,helpers,partials,data) {\n  this.compilerInfo = [2,'>= 1.0.0-rc.3'];\nhelpers = helpers || Handlebars.helpers; data = data || {};\n  var buffer = \"\", stack1, options, functionType=\"function\", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;\n\nfunction program1(depth0,data) {\n  \n  \n  return \"Actions\";\n  }\n\nfunction program3(depth0,data) {\n  \n  \n  return \"Edit\";\n  }\n\nfunction program5(depth0,data) {\n  \n  \n  return \"Permissions\";\n  }\n\nfunction program7(depth0,data) {\n  \n  \n  return \"Delete\";\n  }\n\n  buffer += \"<tr class=\\\"users_row\\\">\\n\t<td >\";\n  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1)\n    + \"</td>\\n\t<td>\";\n  if (stack1 = helpers.firstName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1)\n    + \"</td>\\n\t<td>\";\n  if (stack1 = helpers.lastName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1)\n    + \"</td>\\n\t<td>\";\n  if (stack1 = helpers.login) { stack1 = stack1.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.login; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1)\n    + \"</td>\\n\t<td>\\n\t\t<div class=\\\"btn-group\\\">\\n\t\t  <button data-toggle=\\\"dropdown\\\" class=\\\"btn dropdown-toggle\\\"><i class=\\\"icon-cog\\\"></i>\";\n  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};\n  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }\n  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \"<span class=\\\"caret\\\"></span></button>\\n\t\t  <ul class=\\\"dropdown-menu\\\">\\n\t\t\t<li><a href=\\\"javascript:void(0);\\\" name=\\\"editUser\\\" uid=\\\"\";\n  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1)\n    + \"\\\" >\";\n  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};\n  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }\n  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \"</a></li>\\n\t\t\t<li><a href=\\\"javascript:void(0);\\\" name=\\\"editPerm\\\" uid=\\\"\";\n  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1)\n    + \"\\\" >\";\n  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};\n  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }\n  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \"</a></li>\\n\t\t\t<li><a href=\\\"javascript:void(0);\\\" name=\\\"deleteUser\\\" uid=\\\"\";\n  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1)\n    + \"\\\" >\";\n  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};\n  if (stack1 = helpers.i18n) { stack1 = stack1.call(depth0, options); }\n  else { stack1 = depth0.i18n; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  if (!helpers.i18n) { stack1 = blockHelperMissing.call(depth0, stack1, options); }\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \"</a></li>\t\t\t\t\t\t\\n\t\t  </ul>\\n\t\t</div>\t\t\t\t\t\t\\n\t</td>\\n</tr>\\n\";\n  return buffer;\n  }","mt":1366286122000,"pt":[]},"hogan":{"v":4,"st":"layout"}}