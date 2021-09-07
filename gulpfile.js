require('dotenv').config({
    path: './config/.xxx.env'
});

const {env} = process;

const x = (done) => {
    console.log('env.NODE_ENV:', env.NODE_ENV)
    console.log(env.NODE_ENV === false ? 1 : 2)
    console.log('env.ROOT_DIST:', env.ROOT_DIST)
    console.log('env.ROOT_DEV:', env.ROOT_DEV)
    done()
}

exports.default = x
