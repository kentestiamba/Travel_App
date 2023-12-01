import React, { useState, useRef } from "react";
import { View, Text, Button, Image, FlatList, TouchableOpacity, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from './styles';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

// images
import OnboardingImage1 from '../../../assets/images/onboarding-image-1.png';
import OnboardingImage2 from '../../../assets/images/onboarding-image-2.png';
import OnboardingImage3 from '../../../assets/images/onboarding-image-3.png';
import CyanCircles from '../../../assets/images/cyan-circles.png';
import GreenCircles from '../../../assets/images/green-circles.png';
import OrangeCircles from '../../../assets/images/orange-circles.png';
import PurpleCircles from '../../../assets/images/purple-circles.png';
import RedCircles from '../../../assets/images/red-circles.png';
import YellowCircles from '../../../assets/images/yellow-circles.png';

const slides = [
	{
		id: 1,
		backgroundColor: '#FFF',
		image: (OnboardingImage1),
		sprite1: (GreenCircles),
		sprite2: (PurpleCircles),
		title: 'Find Your Destination',
		description: 'All tourist destinations are in your hancds just click and find the convinience now in phone',
	},
	{
		id: 2,
		backgroundColor: '#FFF',
		image: (OnboardingImage2),
		sprite1:  (OrangeCircles),
		sprite2:  (CyanCircles),
		title: 'Start Your Journey',
		description: 'From this second you will find an amazing and diverse journey through the grip and click ',
	},
	{
		id: 3,
		backgroundColor: '#FFF',
		image: (OnboardingImage3),
		sprite1: (YellowCircles),
		sprite2: (RedCircles),
		title: 'Travel The World',
		description: 'Explore different places in didifferent  countrcountries  and find many surprsurprises always by your side',
	},
];

export default function OnBoardingScreen() {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
	const ref = useRef(null);

	const navigation = useNavigation();
	const {width, height} = useWindowDimensions();

	const Slide = ({item}) => {
		return(
			<View style={[styles.container, {width}]}>
				<View style={styles.spriteContainerLeft}>
					<Image 
						source={item.sprite1}
						style={styles.spriteLeft}
					/>
				</View>
				<View style={styles.spriteContainerRight}>
					<Image 
						source={item.sprite2}
						style={styles.spriteRight}
					/>
				</View>
				<View style={styles.imageParentContainer}>
					<Image 
						source={item.image}
						style={styles.image}
					/>
					<View style={styles.childContainer}>
						<Text style={styles.title}>{item.title}</Text>
						<Text style={styles.description}>{item.description}</Text>
					</View>
				</View>
			</View>
		)
	};

	const updateCurrentSlideIndex = e => {
		const contentOffsetX =  e.nativeEvent.contentOffset.x;
		const currentIndex = Math.round(contentOffsetX / width);
		setCurrentSlideIndex(currentIndex);
	};

	const goNextSlide = () => {
		const nextSlideIndex = currentSlideIndex + 1;
		if (nextSlideIndex != slides.length) {
			const offset = nextSlideIndex * width;
			ref?.current?.scrollToOffset({ offset });
			setCurrentSlideIndex(nextSlideIndex);
		}
	};

	const handleDone = () => {
		console.log('Done Onboarding!')
	};

	const Footer = () => {
		return(
			<>
			<View style={styles.footerContainer}>
				<View style={styles.dotsContainer}>
					{slides.map((_, index) => 
						<View 
							style={[styles.indicator, currentSlideIndex == index && {
								backgroundColor: '#17223B',
								width: 30
							}]}
							key={index}
						/>
					)}
				</View>
				<View style={{paddingBottom: 20}}>
					{currentSlideIndex == slides.length -1 ?(
					<TouchableOpacity style={{width: '40%', justifyContent: 'center', alignSelf: 'flex-end'}} onPress={handleDone}>
						<View style={styles.doneContainer}>
							<Text style={styles.doneText}>Get Started</Text>
						</View> 
					</TouchableOpacity>
					) : (
					<TouchableOpacity style={styles.nextContainer} onPress={goNextSlide}>
						<View style={styles.skip}>
							<Text style={styles.skipTypo}>Skip</Text>
						</View>
						<View style={styles.iconContainer}>
							<AntDesignIcon name='arrowright' style={styles.rightIcon}/>
						</View>
					</TouchableOpacity>
					)}
				</View>
			</View>
			</>
		)
	}

	return (
		<View style={styles.container}>
			<FlatList 
				ref={ref}
				onMomentumScrollEnd={updateCurrentSlideIndex}
				data={slides}
				contentContainerStyle={{height: height * 0.80}}
				pagingEnabled
				horizontal
				showsHorizontalScrollIndicator={false}
				scrollEventThrottle={32}
				renderItem={({item}) => <Slide item={item}/>}
			/>
			<Footer />
		</View>
	);
}
