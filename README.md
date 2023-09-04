# httpgetlog

## Overview

HTTP の GET リクエストに対して、接続元の IP アドレスおよびクエリパラメータ（`?aaa=xxx&bbb=yyy&ccc=zzz` パラメータ内容をログ出力するだけのウェブアプリケーション

運用時は訳あって HTTP 接続での稼働とする（HTTPS にはしない）


## Spec

クエリパラメータが含まれていなかった場合は IP アドレスのみを `trace` ログ出力する。

クエリパラメータが含まれていた場合はその内容を含めて `info` ログ出力する。


## Licensing

This code is licensed under MIT.


## Copyright

2023 K.Kimura @ Juge.Me all rights reserved.

