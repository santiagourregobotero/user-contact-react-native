import React, { useState, useMemo } from 'react';
import { Image, ImageSourcePropType, View, StyleSheet } from 'react-native';

type Props = {
      uri: string,
      size: number,
      placeholder: ImageSourcePropType
};

const AvatarImage: React.FC<Props> = ({ uri, size, placeholder }) => {
      const [image, setImage] = useState<ImageSourcePropType>({ uri });
      const [loading, setLoading] = useState(true);
      const [loadError, setLoadError] = useState(false);


      const overlayImage = (<Image
            source={placeholder}
            style={StyleSheet.flatten([styles.overlay, { width: size, height: size }])}
      />);
      const memorizedImage = useMemo(() => (
            <Image
                  source={image}
                  style={StyleSheet.flatten([styles.image, { width: size, height: size }])}
                  onLoad={() => {
                        setLoading(false)
                  }}
                  onError={() => {
                        setLoading(false);
                        setLoadError(true);
                  }}
            />
      ), [image])
      return (
            <View style={StyleSheet.flatten([styles.container, { width: size, height: size }])}>
                  {memorizedImage}
                  {loading || loadError ? overlayImage : null}
            </View>
      );
};

const styles = StyleSheet.create({
      container: {
      },
      image: {
            top: 0,
            left: 0,
            position: 'absolute'
      },
      overlay: {
            top: 0,
            left: 0,
            position: 'absolute'
      },
});

export default AvatarImage;
