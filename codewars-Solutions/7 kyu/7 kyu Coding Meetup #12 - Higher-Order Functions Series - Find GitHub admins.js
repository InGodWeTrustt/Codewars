function findAdmin(list, lang) {
    return list.filter(({ language, githubAdmin }) => language === lang && githubAdmin === 'yes')
}