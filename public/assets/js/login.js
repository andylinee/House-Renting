$("#test").click(function () {

    console.log($("#sign_in-form").serialize())

    $.post("sign_in", $("#sign_in-form").serialize(), function (result) {

        console.log(result)

        switch (result.type) {
            case 1: {
                swal({
                    title: result.inf,
                    text: '即將導向回首頁',
                    type: 'success',
                }).then(() => {
                    window.location = '/personal'
                })
                break
            }
            case 2: {
                swal({
                    title: result.inf,
                    text: '忘記密碼?',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: '忘記密碼了!',
                    cancelButtonText: "不，我再試試",
                })
                break
            }
            case 0: {
                swal({
                    title: result.inf,
                    text: '找不到此使用者',
                    type: 'error',
                    showCancelButton: true,
                    confirmButtonText: '前往註冊',
                    cancelButtonText: '不，我再試試',
                }).then(() => {
                    //window.location = '/users/sign_up'
                }).catch(() => {
                })
                break
            }
        }

    });
})