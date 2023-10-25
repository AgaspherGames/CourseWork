import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import WebView from "react-native-webview";

export default function DocsPage() {
  return (
    <WebView
      className="flex-1 "
      originWhitelist={["*"]}
      source={{
        html: `<html>
      <body>
      <h1>aaa</h1>
      <div id="adobe-dc-view"></div>

<script src="https://documentcloud.adobe.com/view-sdk/main.js"></script>

<script type="text/javascript">
  document.addEventListener("adobe_dc_view_sdk.ready", function(){
    var adobeDCView = new AdobeDC.View({clientId: "api_key", divId: "adobe-dc-view"});
    adobeDCView.previewFile({
      content: { promise: <FILE_PROMISE> }
      metaData: { fileName: "file_name_to_display" }
    }, {});
  });
</script>
      </body>
      </html>`,
      }}
    />
  );

  return <View style={{ flex: 1 }}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
