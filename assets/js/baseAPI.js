$.ajaxPrefilter(function(options) {
    // 统一拼接ajax的根路径
    options.url = ' http://api-breakingnews-web.itheima.net' + options.url
})