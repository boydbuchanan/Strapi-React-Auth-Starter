docker pull nginx
docker run -v  ${PWD}:/work -it nginx openssl req -x509 -out /work/CSR.csr -new -newkey rsa:2048 -nodes -keyout /work/privateKey.key
