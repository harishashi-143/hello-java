node{
stage('scm checkot'){
git 'https://github.com/harishashi-143/hello-java'
}
stage('compile-prject'){
def mvnloc = tool name: 'maven3', type: 'maven'
sh "${mvnloc}/bin/mvn compile"
}
}
