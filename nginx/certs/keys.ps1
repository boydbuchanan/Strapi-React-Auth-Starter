# replace with your local domain name
docker pull nginx
# docker run -v  ${PWD}:/work -it nginx openssl req -x509 -out /work/CSR.csr -new -newkey rsa:2048 -nodes -keyout /work/privateKey.key
docker run -v ${PWD}:/work -it nginx openssl req -x509 -out /work/ui.localdev.com.crt -new -newkey rsa:2048 -nodes -keyout /work/ui.localdev.com.key -subj '/CN=ui.localdev.com'
docker run -v ${PWD}:/work -it nginx openssl req -x509 -out /work/cms.localdev.com.crt -new -newkey rsa:2048 -nodes -keyout /work/cms.localdev.com.key -subj '/CN=cms.localdev.com'
