#!/bin/sh

set -e

./kubectl \
  --kubeconfig=/dev/null \
  --server=$KUBERNETES_SERVER \
  --insecure-skip-tls-verify=true \
  --token=$KUBERNETES_TOKEN \
  apply -f ./kube/